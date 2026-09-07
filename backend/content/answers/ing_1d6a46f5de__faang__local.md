---
qid: ing_1d6a46f5de__faang__local
question: 'Explain: Example code — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 628
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:33-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asking for a concrete illustration of the **Saga pattern**—a long‑running transaction model used to keep data consistent across distributed services. In ML, sagas are handy when orchestrating pipelines that touch multiple microservices (data ingestion, feature store, training job, model registry). We’ll assume:  
- Each step exposes an HTTP/GRPC API and a compensating action.  
- Failure must rollback all prior steps.  

**2️⃣ Approach**  
1. Define saga states (`Start → Ingest → FeatureExtract → Train → Register → Complete`).  
2. For each state, implement:  
   - *Command* (e.g., `ingestData`)  
   - *Compensating command* (e.g., `deleteIngestedData`).  
3. Use a saga coordinator that persists the current step and triggers the next or compensates on error.  

**3️⃣ Depth**  
```python
class SagaCoordinator:
    def __init__(self, steps):
        self.steps = steps          # list of (action, compensate)
        self.current = 0

    def run(self, payload):
        try:
            for action, _ in self.steps[self.current:]:
                action(payload)     # e.g., call ingestion service
                self.current += 1
            print("Saga complete")
        except Exception as e:
            print(f"Error at step {self.current}: {e}")
            self.compensate(payload)

    def compensate(self, payload):
        for _, comp in reversed(self.steps[:self.current]):
            try: comp(payload)   # rollback actions
            except Exception as ex: 
                print(f"Compensation failed: {ex}")
```
*Complexity*: O(n) steps; each step’s latency dominates.  
*Trade‑offs*: Sagas favor eventual consistency over ACID, but provide clear rollback paths and decouple services.

**4️⃣ Edge Cases**  
- **Partial failures** (e.g., training succeeds but registration fails): compensating the training job may be expensive—consider idempotent delete.  
- **Idempotency**: Ensure each action can run multiple times without side‑effects.  
- **Concurrency**: Multiple sagas on the same data; lock or versioning needed.

**5️⃣ Optimize & Communicate**  
To reduce latency, batch compensations and use async callbacks. In a real interview, I’d sketch a state machine diagram, mention open‑source saga libraries (e.g., Temporal), and explain how this pattern keeps ML pipelines resilient while avoiding tight coupling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
