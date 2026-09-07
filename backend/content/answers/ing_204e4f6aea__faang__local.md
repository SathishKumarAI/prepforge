---
qid: ing_204e4f6aea__faang__local
question: 'Explain: Introduction — How to Troubleshoot if You Can\u2019t Access a
  Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 486
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:39-05:00'
sources: []
---

**Clarify**  
You’re asked to design a system that lets an end‑user *diagnose* why a specific URL is unreachable (DNS failure, routing problem, firewall block, etc.). Assume the user has no admin rights on their machine and the solution must run from a browser or lightweight client. We’ll need to gather network diagnostics, present actionable insights, and respect privacy/security.

**Approach**  
1. **Client‑side probe layer** – Browser extension or web worker that issues:  
   * DNS lookup (via `fetch` to a public resolver API).  
   * TCP/UDP ping via WebRTC data channels (to infer connectivity to various ports).  
   * Traceroute‑like hop discovery using ICE candidate gathering.  
2. **Server‑side aggregator** – A lightweight REST service that receives probe results, normalizes them, and enriches with known public blacklists / ISP routing tables.  
3. **UI & reporting** – Render a step‑by‑step diagnostics tree (e.g., “DNS resolved → TCP connect failed → likely firewall”). Offer links to vendor docs or support tickets.

**Depth**  
- *Complexity*: Client probes are O(1) per check; server aggregation is linear in number of probes.  
- *Trade‑offs*: WebRTC limits hop count (~10), but suffices for most consumer networks. Privacy: all data sent via HTTPS, minimal payload (IP, port, timestamp).  
- *Reliability*: Cache public resolver responses to avoid repeated DNS queries; fallback to multiple resolvers.

**Edge Cases**  
- Encrypted DNS (DoH/DoT) may block client lookups → use public DoH endpoints.  
- Corporate proxies intercept traffic → the probe will see proxy IP; system should flag “proxy detected.”  
- Non‑HTTP protocols (e.g., FTP) – limited support unless user specifies protocol.

**Optimize & Communicate**  
Future improvements: integrate ML to classify failure patterns and suggest fixes automatically, or use crowdsourced latency data for global routing insights. In interviews I’d emphasize the modular design, clear separation of concerns, and how each component maps directly to a troubleshooting step—exactly what FAANG interviewers look for in structured problem solving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
