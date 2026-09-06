---
qid: ing_95ff7085ad__think__local
question: 'Explain: Non-functional Requirements — Mapserviceyelpgooglemap'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 423
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:01:47-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is a “non‑functional requirement (NFR)”?*  
- *Which service are we comparing?* Yelp, Google Maps, or both?  
- Assume we’re talking about a generic “map service” that could be built by either company.  

**2️⃣ Adopt an NFR taxonomy**  
Use a common framework: performance (latency, throughput), reliability, scalability, security, usability, maintainability, and compliance.  

**3️⃣ Reason through each dimension step‑by‑step**  
- *Performance*: estimate query latency targets for mobile vs desktop; consider caching strategies.  
- *Reliability*: uptime SLAs, failover mechanisms (e.g., multi‑region replication).  
- *Scalability*: peak traffic patterns (tourist season), horizontal scaling of tile servers.  
- *Security*: API key management, rate limiting, data encryption at rest/in transit.  
- *Usability*: map rendering quality, accessibility features, offline mode.  
- *Maintainability*: versioning of APIs, backward compatibility, documentation.  
- *Compliance*: GDPR for user location data, local mapping regulations.  

**4️⃣ Beware common traps**  
- Mixing functional (e.g., “show POIs”) with non‑functional goals.  
- Over‑emphasizing one metric (latency) while ignoring others (security).  
- Assuming the same NFRs apply equally to Yelp and Google Maps; each has different business priorities.  

**5️⃣ Sanity‑check & verbalize**  
- Cross‑verify that every listed point maps to a measurable target or policy.  
- Summarize in plain language: “The map service must deliver <200 ms latency under 10k concurrent users, maintain 99.95% uptime, encrypt all data, and comply with GDPR.”  

Follow this checklist whenever you need to articulate NFRs for any complex web or mobile service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
