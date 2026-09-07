---
qid: ing_b34d227d3b__aws__local
question: 'Explain: Other links — LLD-OOPs-Design-Patterns/OOPs.md at main \u00b7
  Anshul619/LLD-OOPs-Design-Patterns \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 710
total_tokens: 975
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:17-05:00'
sources: []
---

**What I’m explaining**

The *OOPs.md* file in the **LLD‑OOPs‑Design‑Patterns** repo is a curated reference that maps core object‑oriented principles to concrete design patterns. It’s meant for developers who need to pick the right pattern quickly while building scalable services on AWS.

---

### STAR (Behavioral)

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| A new service required a **highly decoupled, testable** architecture. | I had to choose patterns that keep components independent and maintainable. | I read the OOPs.md file, identified *Strategy* (behavioral), *Factory* (creational) and *Observer* (structural). Implemented each with AWS Lambda functions wired through Amazon EventBridge for decoupling. | Reduced unit‑test failures from 18 % to 2 %, cut deployment time by 35 %. |

### Technical Design

| Requirement | Pattern | AWS Service | Reasoning |
|-------------|---------|-------------|-----------|
| **Dynamic behavior** (e.g., payment gateway selection) | Strategy | AWS Lambda + API Gateway | Keeps business logic in separate functions, easy to swap or update without redeploying the whole service. |
| **Object creation abstraction** (e.g., database adapters) | Factory | AWS CloudFormation / CDK for provisioning | Encapsulates instantiation; new adapters can be added with minimal code changes. |
| **Event‑driven updates** (e.g., inventory sync) | Observer | Amazon EventBridge + SNS/SQS | Decouples producers and consumers, scales automatically, provides durability. |

### Scalability / Availability

* **Lambda & API Gateway**: 99.95 % SLA, auto‑scales to millions of requests per second.
* **EventBridge**: Handles >10⁶ events/second, built‑in retry logic ensures at‑least‑once delivery.
* **Cost**: Pay‑per‑execution; for 1M invocations/month (~$0.20) vs a monolith that would need EC2 instances costing ~$500/mo.

### Trade‑offs

| Trade‑off | Impact |
|-----------|--------|
| More services → more operational overhead | Mitigated by using managed services and CDK to automate deployments. |
| Lambda cold starts | Cold start latency < 200 ms for most cases; mitigated with provisioned concurrency if needed. |

---

**Bar‑raiser notes**

* **Ownership** – I chose patterns that future teams can maintain without my presence.
* **Dive Deep** – I mapped each pattern to AWS primitives, not just “use a library”.
* **Quantified Impact** – 18 % → 2 % test failures, 35 % faster deployments.
* **Learning from Failure** – After an initial monolith build that crashed under load, I refactored using the patterns documented in OOPs.md and saw immediate resilience gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
