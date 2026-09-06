---
qid: ing_a3c50d2c2d__fp__local
question: 'Explain: Q94: You''re building a computer-use agent (Claude Cowork, OpenAI
  Operator-class) that can fill forms, click buttons, and read screen content. Design
  the sandbox, network policy, and human-confirmation pattern.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 532
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:54:34-05:00'
sources: []
---

### Why a sandbox is required  
A UI‑automation agent must *act* inside an arbitrary application while never leaking data or executing untrusted code. The fundamental problem is **isolation vs. interaction**: the agent needs to read pixels and send mouse/keyboard events, yet we cannot let it run arbitrary binaries or read system memory.

1. **Process isolation** – Run the agent in a container with only the GUI server (X11/Wayland) exposed.  
2. **Memory‑protected sandbox** – Use seccomp‑bpf to block syscalls that could open files, fork, or load libraries outside the container.  
3. **File system read‑only** – Mount /dev/null for writes; allow read‑only mounts of user data directories that the agent needs.

### Network policy  
The agent should never reach the internet unless explicitly allowed by a human rule.  
- **Default deny**: All outbound sockets blocked via iptables/ebpf.  
- **Explicit allow list**: A whitelist of trusted services (e.g., company intranet API) that can be added only after a *human‑approval* step.  
- **Audit logging**: Every connection attempt is logged with timestamp, target IP, and outcome.

### Human‑confirmation pattern  
The agent operates in two modes:

| Stage | Action | Verification |
|-------|--------|--------------|
| 1️⃣ Form‑fill | Predict next field, type data | Show preview + “Confirm?” dialog |
| 2️⃣ Button click | Compute element coordinates via image matching | Highlight button, ask for “Proceed?” |
| 3️⃣ Data read | OCR or accessibility tree extraction | Return parsed text; request confirmation if sensitive |

**Why this works:**  
- **Error propagation is bounded**: The agent can only act after a human gate, preventing cascaded failures.  
- **Auditability**: Every step is logged and auditable.  
- **Human‑in‑the‑loop reduces risk**: Even if the model misidentifies an element, the user sees the action before it happens.

#### Non‑obvious insight  
The *visual* sandbox (highlighting UI elements) doubles as a real‑time feedback loop that not only protects users but also provides the agent with a self‑supervised signal: the discrepancy between predicted and highlighted coordinates can be used to fine‑tune its vision model on‑device, improving future performance without exposing raw screen data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
