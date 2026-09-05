---
qid: ing_125fa64a66__star__local
question: Design a customer-facing agent for an airline that can cancel and rebook
  flights. How do you keep it from violating fare policy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 362
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:25-05:00'
sources: []
---

**Situation**  
At my last job I was tasked with launching a chatbot for a regional carrier’s web portal. The agency had just rolled out a new dynamic pricing model, and any automated booking or cancellation had to respect strict fare‑rules that varied by ticket class, route, and time‑to-departure.

**Task**  
Build a customer‑facing agent that could cancel and rebook flights on behalf of users while guaranteeing compliance with every fare policy, avoiding penalties or revenue loss for the airline.

**Action**  
I started by mapping the entire fare‑rule engine into an internal service layer using GraphQL. The bot’s NLP module (spaCy + BERT fine‑tuned) parsed user intents and extracted intent‑specific slots—flight number, desired new date, cabin class. Before any booking API call I routed the request through a “Policy Validator” microservice that queried the fare engine for the exact rule set: fare basis code, change fees, refund eligibility, blackout dates, and rebooking windows. The validator returned a signed policy token; only requests with a valid token were forwarded to the airline’s SOAP/REST booking API. I also implemented a “dry‑run” simulation mode that would compute potential penalties without committing changes, feeding the result back to the user for confirmation.

**Result**  
The bot handled 4,500 interactions in its first month, reducing manual agent tickets by 35 %. The policy validator prevented 97 % of rule violations, saving the airline an estimated $120K in avoided fees. I learned that coupling NLP with a real‑time rule engine and tokenized validation is key to safe automation in highly regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
