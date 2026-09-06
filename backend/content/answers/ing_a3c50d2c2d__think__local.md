---
qid: ing_a3c50d2c2d__think__local
question: 'Explain: Q94: You''re building a computer-use agent (Claude Cowork, OpenAI
  Operator-class) that can fill forms, click buttons, and read screen content. Design
  the sandbox, network policy, and human-confirmation pattern.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 723
total_tokens: 948
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:54:13-05:00'
sources: []
---

We need to outline thinking process.**1️⃣ Clarify & Assume**  
- *Scope*: The agent runs on a workstation, interacts with GUI apps (web browsers, native dialogs).  
- *Constraints*: No direct access to the host file system or privileged APIs; must stay within a sandboxed VM/container.  
- *Goal*: Ensure safety, auditability, and human oversight while still enabling full form‑filling/interaction capabilities.

**2️⃣ Mental Model / Framework**  
- **Sandboxing**: Virtualization + OS‑level isolation (e.g., Firecracker microVM or Docker with seccomp).  
- **Network Policy**: Zero‑trust network segmentation; allow only outbound HTTPS to whitelisted endpoints, no inbound traffic.  
- **Human Confirmation**: Two‑tier prompt system—(a) *pre‑action* “Would you like me to click this button?” and (b) *post‑action* “I just entered X into field Y; is that correct?”

**3️⃣ Step‑by‑Step Reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| **a. VM/Container** | Spin up a fresh microVM with only the GUI automation stack (e.g., PyAutoGUI, Selenium). | Keeps OS state isolated; any compromise is contained. |
| **b. File System** | Mount a temporary writable volume for logs; deny read/write to host directories. | Prevents data exfiltration or tampering. |
| **c. Network** | Use iptables/NFTables to allow only outbound TLS, whitelist IPs via CIDR blocks. Add DNS filtering. | Stops the agent from reaching malicious hosts or leaking data. |
| **d. GUI Capture** | Run a headless X server (Xephyr) and expose it over a local VNC on an encrypted tunnel. | Allows the agent to “see” screen content without exposing full desktop. |
| **e. Human‑in‑the‑Loop** | Build a lightweight UI that pops up a modal dialog with the action description, screenshot snippet, and Yes/No buttons. Use WebSocket to sync state. | Gives operators instant confirmation; logs decisions for audit. |
| **f. Logging & Auditing** | Persist all keystrokes, clicks, screenshots, network requests in an immutable log (e.g., WORM storage). | Enables forensic review if something goes wrong. |

**4️⃣ Common Traps to Avoid**  
- *Over‑privileged containers*: Allowing `SYS_ADMIN` or mounting host `/proc`.  
- *Blind automation*: Letting the agent click without verifying element identity can lead to mis‑clicks.  
- *Network “leaks”*: Forgetting to block DNS queries to internal networks.  
- *Human fatigue*: Too many confirmation prompts can cause operators to ignore them.

**5️⃣ Sanity Checks & Communication**  
- Run a test script that attempts an unauthorized file read; it should fail.  
- Verify network policy by scanning from inside the VM; only allowed IPs respond.  
- Simulate a form submission and ensure the human prompt appears before any click.  
- Document the architecture diagram and explain each boundary to stakeholders.

By iterating through these steps, you’ll design a robust sandboxed environment with tight network controls and a clear human‑confirmation workflow that balances automation speed with safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
