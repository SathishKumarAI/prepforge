---
qid: ing_784e2de05c__faang__local
question: 'Explain: Client-side failure — How to Troubleshoot if You Can\u2019t Access
  a Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 442
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:23:49-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that helps users troubleshoot *client‑side* failures when they can’t reach a specific website (e.g., “The page is down” but the user has Internet). Assume we have access to the user’s device, network diagnostics, and minimal backend services. We need to confirm:  
- Is the issue DNS, routing, firewall, or browser?  
- Do we need real‑time feedback or batch logs?

**Approach**  
1. **Collect diagnostics locally** – a lightweight agent (browser extension or mobile app) runs standard tests: ping, traceroute, DNS lookup, TLS handshake, and page fetch with detailed headers.  
2. **Aggregate & analyze** – send anonymized metrics to a backend service that correlates them with known failure patterns using ML classifiers (e.g., random forest).  
3. **Provide actionable guidance** – the agent presents steps: “Try another DNS server”, “Clear cache”, “Check VPN”.  
4. **Feedback loop** – user confirms resolution; data feeds back to retrain the model.

**Depth**  
- Local tests run in parallel, O(1) per test.  
- Backend uses streaming ingestion (Kafka) and batch ML training nightly; inference latency < 200 ms.  
- Security: end‑to‑end encryption, no personal data stored.  
- Scalability: stateless agents, auto‑scaling inference pods.

**Edge Cases**  
- Device offline → fallback to local heuristics.  
- VPN or corporate proxy → detect via IP ranges.  
- Browser extensions blocked → prompt for native app install.

**Optimize & Communicate**  
Explain trade‑offs: heavier diagnostics give richer data but increase bandwidth; lighter checks keep UX smooth. Emphasize that the system is modular so we can add new tests (e.g., WebRTC ICE) without redesigning. Conclude with how this architecture meets FAANG expectations: clear problem framing, scalable solution, measurable metrics, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
