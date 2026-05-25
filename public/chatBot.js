(function () {

    // Prevent duplicate widget injection
    if (window.__SUPPORT_AI_WIDGET__) return;
    window.__SUPPORT_AI_WIDGET__ = true;

    // =========================
    // CONFIG
    // =========================

    const api_Url =
        "https://supportly-chi.vercel.app/api/chat";

    const scriptTag =
        document.currentScript;

    const ownerId =
        scriptTag.getAttribute("data-owner-id");

    if (!ownerId) {
        console.error("Owner ID not found");
        return;
    }

    // =========================
    // CHAT BUTTON
    // =========================

    const button =
        document.createElement("div");

    button.textContent = "💬";

    Object.assign(button.style, {
        position: "fixed",
        bottom: "24px",
        right: "24px",
        width: "62px",
        height: "62px",
        borderRadius: "50%",
        background:
            "linear-gradient(135deg,#18181b,#09090b)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "24px",
        boxShadow:
            "0 15px 50px rgba(0,0,0,0.45)",
        zIndex: "999999",
        transition: "all 0.25s ease",
        userSelect: "none",
    });

    button.onmouseenter = () => {
        button.style.transform =
            "scale(1.08)";
    };

    button.onmouseleave = () => {
        button.style.transform =
            "scale(1)";
    };

    document.body.appendChild(button);

    // =========================
    // CHAT BOX
    // =========================

    const box =
        document.createElement("div");

    Object.assign(box.style, {
        position: "fixed",
        bottom: "98px",
        right: "24px",
        width: "min(92vw, 370px)",
        height: "620px",
        background:
            "rgba(15,15,15,0.92)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter:
            "blur(18px)",
        borderRadius: "28px",
        boxShadow:
            "0 20px 80px rgba(0,0,0,0.45)",
        display: "none",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: "999999",
        fontFamily:
            "Inter, system-ui, sans-serif",
        border:
            "1px solid rgba(255,255,255,0.08)",
    });

    box.innerHTML = `

    <!-- HEADER -->
    <div style="
        background:rgba(255,255,255,0.04);
        backdrop-filter:blur(10px);
        color:#fff;
        padding:18px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid rgba(255,255,255,0.06);
    ">

        <div>
            <div style="
                font-size:15px;
                font-weight:600;
                letter-spacing:-0.2px;
            ">
                AI Customer Support
            </div>

            <div style="
                font-size:12px;
                opacity:0.65;
                margin-top:4px;
            ">
                Usually replies instantly
            </div>
        </div>

        <span 
            id="chat-close"
            style="
                cursor:pointer;
                font-size:22px;
                user-select:none;
                opacity:0.7;
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
            padding:16px;
            overflow-y:auto;
            background:#0f0f0f;
            display:flex;
            flex-direction:column;
        "
    ></div>

    <!-- INPUT -->
    <div style="
        display:flex;
        gap:10px;
        padding:14px;
        border-top:1px solid rgba(255,255,255,0.06);
        background:#0f0f0f;
    ">

        <input
            id="chat-input"
            type="text"
            placeholder="Ask about shipping, refunds, orders..."
            style="
                flex:1;
                padding:14px 16px;
                border:1px solid rgba(255,255,255,0.08);
                border-radius:18px;
                font-size:13px;
                outline:none;
                background:rgba(255,255,255,0.05);
                color:white;
            "
        />

        <button
            id="chat-send"
            style="
                padding:0 18px;
                border:none;
                background:white;
                color:black;
                border-radius:18px;
                font-size:13px;
                cursor:pointer;
                font-weight:600;
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

    document.querySelector(
        "#chat-close"
    ).onclick = () => {

        box.style.display = "none";
    };

    // =========================
    // ELEMENTS
    // =========================

    const input =
        document.querySelector("#chat-input");

    const sendBtn =
        document.querySelector("#chat-send");

    const messageArea =
        document.querySelector("#chat-messages");

    // =========================
    // ADD MESSAGE
    // =========================

    function addMessage(text, from) {

        const bubble =
            document.createElement("div");

        bubble.textContent = text;

        Object.assign(bubble.style, {

            maxWidth: "85%",

            padding: "14px 16px",

            borderRadius: "22px",

            fontSize: "14px",

            lineHeight: "1.7",

            marginBottom: "12px",

            alignSelf:
                from === "user"
                    ? "flex-end"
                    : "flex-start",

            background:
                from === "user"
                    ? "#ffffff"
                    : "rgba(255,255,255,0.06)",

            color:
                from === "user"
                    ? "#000"
                    : "#fff",

            border:
                from === "user"
                    ? "none"
                    : "1px solid rgba(255,255,255,0.06)",

            borderTopRightRadius:
                from === "user"
                    ? "6px"
                    : "22px",

            borderTopLeftRadius:
                from === "user"
                    ? "22px"
                    : "6px",

            wordBreak: "break-word",

            animation:
                "fadeUp 0.25s ease",
        });

        messageArea.appendChild(bubble);

        messageArea.scrollTop =
            messageArea.scrollHeight;
    }

    // =========================
    // WELCOME MESSAGE
    // =========================

    addMessage(
        "Hello 👋 How can we help you today?",
        "ai"
    );

    // =========================
    // SEND MESSAGE
    // =========================

    async function sendMessage() {

        const text =
            input.value.trim();

        if (!text) return;

        // User Message
        addMessage(text, "user");

        input.value = "";

        // Disable button
        sendBtn.disabled = true;

        sendBtn.textContent = "...";

        // Typing Indicator
        const typing =
            document.createElement("div");

        typing.textContent =
            "AI is typing...";

        Object.assign(typing.style, {
            fontSize: "12px",
            color:
                "rgba(255,255,255,0.55)",
            marginBottom: "10px",
            alignSelf: "flex-start",
        });

        messageArea.appendChild(typing);

        messageArea.scrollTop =
            messageArea.scrollHeight;

        try {

            const response =
                await fetch(api_Url, {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json",
                    },

                    body: JSON.stringify({
                        ownerId,
                        message: text,
                    }),
                });

            if (!response.ok) {
                throw new Error(
                    "API Error"
                );
            }

            const data =
                await response.json();

            // Remove typing
            messageArea.removeChild(
                typing
            );

            // CLEAN MARKDOWN
            const cleanReply =
                (
                    data.reply ||
                    "No response received"
                )
                    .replace(/\*\*/g, "")
                    .replace(/\*/g, "");

            addMessage(
                cleanReply,
                "ai"
            );

        } catch (error) {

            console.error(error);

            if (
                messageArea.contains(typing)
            ) {

                messageArea.removeChild(
                    typing
                );
            }

            addMessage(
                "Something went wrong. Please try again.",
                "ai"
            );

        } finally {

            sendBtn.disabled = false;

            sendBtn.textContent =
                "Send";

            input.focus();
        }
    }

    // =========================
    // EVENTS
    // =========================

    sendBtn.onclick = sendMessage;

    input.addEventListener(
        "keydown",
        (e) => {

            if (e.key === "Enter") {
                sendMessage();
            }
        }
    );

})();