---
qid: ing_d2d65ef18b__fp__local
question: 'Explain: Historical Address Classes — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 398
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:29:18-05:00'
sources: []
---

**Historical Address Classes – Why the “A‑B‑C” System Emerged**

When IPv4 was drafted (1978), routers had to decide *which* packets were destined for their local network and which needed forwarding. The simplest rule: **a fixed prefix length defined a subnet, and the remainder identified hosts**. To balance two competing constraints—network size vs. address scarcity—the designers introduced three “classes”:

| Class | Network bits | Host bits | Typical use |
|-------|--------------|-----------|-------------|
| A | 8 | 24 | Very large networks (e.g., mainframes) |
| B | 16 | 16 | Medium‑sized organizations |
| C | 24 | 8 | Small LANs |

This is an early instance of *hierarchical encoding*: the most significant bits encode higher‑level structure, lower bits encode finer detail. It mirrors a **tree** in which each level splits the address space by a fixed factor (2¹⁶ for Class B, 2⁸ for Class C). The design satisfies an information‑theoretic trade‑off: larger prefixes give fewer hosts per network but more networks overall, conserving scarce global addresses.

**Non‑obvious insight:**  
The class system implicitly assumes **uniform address demand** across the internet. In reality, a few networks consume most addresses (e.g., ISPs), while many small sites need only a handful. Thus the rigid 8/16/24 split wastes millions of addresses—precisely what CIDR later remedied by allowing variable‑length prefixes. The classful scheme’s failure highlights that *flexible granularity* is essential when resource allocation is uneven.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
