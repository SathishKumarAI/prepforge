---
qid: ing_f02fe3c12d__eli5__local
question: 'Explain: Layer 3: Network — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 215
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:55-05:00'
sources: []
---

Think of the OSI model like a postal service that delivers packages from one town to another.  
**Layer 3 – Network** is the part that decides *where* each package should go, not how it’s wrapped or who finally opens it. It looks at the “address” (IP address) on the package and routes it through the best road network—routers are like traffic lights that forward packets based on their destination.  

In system design, you choose a routing protocol (BGP, OSPF) to tell routers how to build these roads. You also set up subnet masks to split your town into smaller neighborhoods, so only the right cars (packets) enter each street. The network layer ensures every message finds its way across possibly many hops before reaching the destination device, just as a postal system guarantees a letter reaches the correct mailbox even if it passes through several post offices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
