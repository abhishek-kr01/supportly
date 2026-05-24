(function () {

    // Prevent duplicate widget injection
    if (window.__SUPPORT_AI_WIDGET__) return;
    window.__SUPPORT_AI_WIDGET__ = true;

    // =========================
    // CONFIG
    // =========================

    const api_Url = "https://support-ai-tau.vercel.app/api/chat";

    const scriptTag = document.currentScript;
    const ownerId = scriptTag.getAttribute("data-owner-id");

    if (!ownerId) {
        console.error("Owner ID not found");
        return;
    }

    // =========================
    // CHAT BUTTON
    // =========================

    const button = document.createElement("div");

    button.textContent = "🗨️";

    Object.assign(button.style, {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "22px",
        boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
        zIndex: "999999",
        transition: "all 0.2s ease",
        userSelect: "none",
    });

    button.onmouseenter = () => {
        button.style.transform = "scale(1.05)";
    };

    button.onmouseleave = () => {
        button.style.transform = "scale(1)";
    };

    document.body.appendChild(button);

    // =========================
    // CHAT BOX
    // =========================

    const box = document.createElement("div");

    Object.assign(box.style, {
        position: "fixed",
        bottom: "94px",
        right: "24px",
        width: "min(92vw, 340px)",
        height: "500px",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
        display: "none",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: "999999",
        fontFamily: "Inter, system-ui, sans-serif",
        border: "1px solid #e5e7eb",
    });

    box.innerHTML = `
    
    <!-- HEADER -->
    <div style="
        background:#000;
        color:#fff;
        padding:14px 16px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    ">
        <div>
            <div style="font-size:14px;font-weight:600;">
                Customer Support
            </div>

            <div style="
                font-size:11px;
                opacity:0.7;
                margin-top:2px;
            ">
                We usually reply instantly
            </div>
        </div>

        <span 
            id="chat-close"
            style="
                cursor:pointer;
                font-size:18px;
                user-select:none;
            "
        >
            ×
        </span>
    </div>

    <!-- MESSAGES -->
    <div 
        id="chat-messages"
        style="
            flex:1;
            padding:14px;
            overflow-y:auto;
            background:#f9fafb;
            display:flex;
            flex-direction:column;
        "
    ></div>

    <!-- INPUT -->
    <div style="
        display:flex;
        gap:8px;
        padding:10px;
        border-top:1px solid #e5e7eb;
        background:#fff;
    ">
        <input
            id="chat-input"
            type="text"
            placeholder="Type your message..."
            style="
                flex:1;
                padding:10px 12px;
                border:1px solid #d1d5db;
                border-radius:10px;
                font-size:13px;
                outline:none;
                transition:0.2s;
            "
        />

        <button
            id="chat-send"
            style="
                padding:10px 14px;
                border:none;
                background:#000;
                color:#fff;
                border-radius:10px;
                font-size:13px;
                cursor:pointer;
                font-weight:500;
            "
        >
            Send
        </button>
    </div>
    `;

    document.body.appendChild(box);

    // =========================
    // TOGGLE CHAT
    // =========================

    button.onclick = () => {
        box.style.display =
            box.style.display === "none"
                ? "flex"
                : "none";
    };

    document.querySelector("#chat-close").onclick = () => {
        box.style.display = "none";
    };

    // =========================
    // ELEMENTS
    // =========================

    const input = document.querySelector("#chat-input");
    const sendBtn = document.querySelector("#chat-send");
    const messageArea = document.querySelector("#chat-messages");

    // =========================
    // ADD MESSAGE
    // =========================

    function addMessage(text, from) {

        const bubble = document.createElement("div");

        // SECURITY FIX
        bubble.textContent = text;

        Object.assign(bubble.style, {
            maxWidth: "82%",
            padding: "10px 14px",
            borderRadius: "16px",
            fontSize: "13px",
            lineHeight: "1.5",
            marginBottom: "10px",
            alignSelf:
                from === "user"
                    ? "flex-end"
                    : "flex-start",

            background:
                from === "user"
                    ? "#000"
                    : "#e5e7eb",

            color:
                from === "user"
                    ? "#fff"
                    : "#111827",

            borderTopRightRadius:
                from === "user"
                    ? "4px"
                    : "16px",

            borderTopLeftRadius:
                from === "user"
                    ? "16px"
                    : "4px",

            wordBreak: "break-word",
        });

        messageArea.appendChild(bubble);

        messageArea.scrollTop =
            messageArea.scrollHeight;
    }

    // =========================
    // WELCOME MESSAGE
    // =========================

    addMessage(
        "Hi 👋 How can we help you today?",
        "ai"
    );

    // =========================
    // SEND MESSAGE
    // =========================

    async function sendMessage() {

        const text = input.value.trim();

        if (!text) return;

        // User Message
        addMessage(text, "user");

        input.value = "";

        // Disable button
        sendBtn.disabled = true;
        sendBtn.textContent = "...";

        // Typing Indicator
        const typing = document.createElement("div");

        typing.textContent = "AI is typing...";

        Object.assign(typing.style, {
            fontSize: "12px",
            color: "#6b7280",
            marginBottom: "10px",
            alignSelf: "flex-start",
        });

        messageArea.appendChild(typing);

        messageArea.scrollTop =
            messageArea.scrollHeight;

        try {

            const response = await fetch(api_Url, {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    ownerId,
                    message: text,
                }),
            });

            if (!response.ok) {
                throw new Error("API Error");
            }

            const data = await response.json();

            // Remove typing
            messageArea.removeChild(typing);

            addMessage(
                data.reply ||
                "No response received",
                "ai"
            );

        } catch (error) {

            console.error(error);

            if (messageArea.contains(typing)) {
                messageArea.removeChild(typing);
            }

            addMessage(
                "Something went wrong. Please try again.",
                "ai"
            );

        } finally {

            sendBtn.disabled = false;
            sendBtn.textContent = "Send";

            input.focus();
        }
    }

    // =========================
    // EVENTS
    // =========================

    sendBtn.onclick = sendMessage;

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

})();