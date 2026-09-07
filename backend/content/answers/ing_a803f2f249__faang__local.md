---
qid: ing_a803f2f249__faang__local
question: 'Explain: A bad and a good example — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 461
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:15:22-05:00'
sources: []
---

**Clarify**  
The interviewer wants two concrete examples of mobile‑system design questions that *fail* versus those that *succeed*. I’ll assume the context is a candidate designing an app‑level service (e.g., messaging, streaming) for iOS/Android and that we’re focusing on scalability, reliability, and user experience.

**Approach**  
1. Identify a “bad” prompt that misleads or is too vague.  
2. Show why it hampers structured thinking.  
3. Provide a “good” prompt that forces the interviewee to think about data flow, architecture, constraints, and trade‑offs.  
4. Highlight key discussion points for each.

**Depth**

| Bad Example | Why it’s poor |
|-------------|---------------|
| *“Design a mobile app that lets users share photos.”* | No size or feature constraints; interviewee may propose an endless list of ideas (cloud storage, filters, comments) without focusing on core problems like bandwidth, offline access, or scaling to millions. |

| Good Example | Why it’s strong |
|-------------|----------------|
| *“Design a photo‑sharing app for 100 M daily active users that supports offline uploads, real‑time notifications, and 99.9 % availability in regions with intermittent connectivity.”* | Provides clear scale, functional requirements, edge constraints (offline), and SLAs. It invites discussion of CDN usage, conflict resolution, data consistency models, push vs. pull for notifications, and cost‑effective storage tiers. |

**Edge Cases**  
- Bad prompt: interviewee may skip security or privacy; no testable metrics.  
- Good prompt: must handle device fragmentation, API versioning, and progressive enhancement.

**Optimize & Communicate**  
When coaching a candidate:
1. Emphasize extracting constraints from the question (traffic, latency, reliability).  
2. Ask “what if” scenarios to surface assumptions.  
3. Guide them to iterate on a high‑level diagram before diving into micro‑services or database schemas.  

This structured framing demonstrates clear communication and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
