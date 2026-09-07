---
qid: ing_a3c50d2c2d__faang__local
question: 'Explain: Q94: You''re building a computer-use agent (Claude Cowork, OpenAI
  Operator-class) that can fill forms, click buttons, and read screen content. Design
  the sandbox, network policy, and human-confirmation pattern.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 478
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:55-05:00'
sources: []
---

**Clarify**  
We need a sandboxed UI‑automation agent that can: (1) read screen content, (2) click buttons, (3) fill forms, and (4) confirm actions with a human when needed.  
Assumptions to confirm:  
- Target OS & desktop environment (Windows/macOS/Linux).  
- Whether the agent runs locally or on a remote VM.  
- The granularity of “human‑confirmation” (prompt UI vs email).  

**Approach**  
1. **Sandbox** – Containerize the agent with minimal privileged processes, expose only a virtual display via Xvfb/Wayland and a secure clipboard.  
2. **Network policy** – Allow outbound HTTPS to a whitelist of endpoints (e.g., internal auth, telemetry) but block all other traffic; use eBPF or iptables for enforcement.  
3. **Human‑confirmation** – Hook into the agent’s command queue; on “high‑risk” actions (e.g., submitting data), pause and publish a signed JSON payload to a secure web hook that an operator UI consumes, awaiting approval before proceeding.  

**Depth**  
- Use `xdotool`/Accessibility APIs for UI events; wrap in a Go/Python service inside the container.  
- Network isolation via Linux namespaces + nftables: `nft add rule inet filter output ip daddr {whitelist} tcp dport 443 accept`.  
- Human‑confirm flow: agent emits `{action_id, description}` → secure REST POST to Ops server; upon `200 OK` with `approved:true`, the agent resumes.  

**Edge Cases**  
- UI changes breaking element locators → fallback to image recognition.  
- Network stalls → retry logic and timeouts.  
- Unauthorized clipboard access → sandboxed clipboard per namespace.  

**Optimize & Communicate**  
Add a “sandbox audit log” (e.g., SQLite) recording every click/form fill with timestamps, hashed payloads, and operator decisions. Communicate design via diagrams: container ↔︎ host network isolation ↔︎ Ops portal. This shows clear boundaries, minimal attack surface, and auditable human oversight—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
