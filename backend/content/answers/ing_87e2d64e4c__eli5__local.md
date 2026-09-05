---
qid: ing_87e2d64e4c__eli5__local
question: 'Explain: Disadvantages : — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 264
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:11:41-05:00'
sources: []
---

**Disadvantages of a Poorly‑Designed Service‑Discovery System**

Imagine you’re at a large office party where everyone keeps changing rooms. If no one knows where the snacks are, people wander aimlessly and waste time. That’s what happens when *service discovery*—the way software components find each other—gets messy.

**What is service discovery?**  
It’s like a “who’s in which room?” directory for computer programs. Each micro‑service registers its address (IP + port) somewhere, and others ask that directory to locate it. If the registry is slow, unreliable, or hard to update, services can’t find each other quickly, causing delays, errors, or even outages.

**Why this matters:**  
- **Latency spikes**: Waiting for a lookup slows everything down.  
- **Single point of failure**: If the directory crashes, no service can talk to any other.  
- **Complexity grows**: More services mean more registrations and updates, turning a simple phone book into a tangled web.

So, a clunky service‑discovery design turns a smooth conversation between programs into a frustrating game of “Where’s Waldo?”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
