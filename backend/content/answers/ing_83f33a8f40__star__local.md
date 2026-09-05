---
qid: ing_83f33a8f40__star__local
question: The customer wants your agent to take write actions in their ERP - create
  purchase orders, update records. How do you design and stage that safely?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 349
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:12-05:00'
sources: []
---

**Situation**  
At a mid‑size manufacturing firm, the sales team wanted an AI assistant that could automatically generate purchase orders in their SAP ECC system whenever a high‑value order exceeded $50k. The ERP had strict audit trails and limited API access.

**Task**  
Design a safe, compliant pipeline that lets the agent write to ERP without compromising data integrity or violating security policies, while ensuring traceability and rollback capabilities.

**Action**  
1. Built an intermediate “intent queue” in Azure Service Bus, where the NLP model publishes a *create‑po* intent with all order details.  
2. Implemented a dedicated microservice (Python + FastAPI) that consumes the queue, validates data against business rules, and maps it to SAP’s RFC calls via PyRFC.  
3. Added a “sandbox” mode: first create the PO in a cloned SAP test environment, capture the transaction ID, and run automated checks (inventory levels, supplier credit limits).  
4. Only after approval does the service issue the final RFC call to production, logging every step in an immutable audit log stored in Cosmos DB with HSM‑protected keys.  
5. Deployed a rollback handler that can cancel or amend POs via SAP’s “CANCEL_PO” RFC if any downstream failure occurs.

**Result**  
The new workflow cut PO creation time from 30 minutes to 3 minutes, reduced manual errors by 92%, and earned the customer an ISO 27001 audit pass. I learned that layering intent queues, sandbox validation, and immutable logging is key when giving AI write access to mission‑critical systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
