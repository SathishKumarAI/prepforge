---
qid: ing_b6f4053fd7__think__local
question: 'Explain: Example: Choreography-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 475
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:01:44-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
   - Identify the domain (distributed systems / micro‑services).  
   - Confirm that “choreography‑based saga” refers to the Saga pattern for long‑running transactions, not choreography in dance or ML choreography.  
   - Assume we need a concise explanation and an illustrative example.

**2️⃣ Pick a mental model**  
   - Use the *Saga* framework: (a) decomposition into atomic sub‑tasks, (b) compensating actions, (c) two execution styles—choreography vs. orchestration.  
   - Map each element to concrete code or message flows.

**3️⃣ Step‑by‑step reasoning**  
   1. Define a saga as a sequence of local transactions with rollback logic.  
   2. Explain choreography: each service emits events; others react autonomously—no central coordinator.  
   3. Show how compensation events are emitted when a step fails, and how other services undo their work.  
   4. Give a concrete example (e.g., booking a flight + hotel + car rental).  
      - Service A: Book flight → emits `FlightBooked`.  
      - Service B listens → books hotel, emits `HotelBooked`.  
      - Service C listens → books car, emits `CarBooked`.  
      - If B fails after A succeeded, B publishes `HotelFailed` → A compensates with `CancelFlight`.  

**4️⃣ Avoid common traps**  
   - Don’t conflate choreography with orchestration; remember no central controller.  
   - Beware of message ordering assumptions—use event sequencing or correlation IDs.  
   - Don’t gloss over idempotency; each service must handle duplicate events safely.

**5️⃣ Sanity‑check & communicate**  
   - Re‑read the explanation to ensure every step is traceable.  
   - Use a simple diagram (text‑based) if possible: `A → B → C` with arrows labeled “Event”.  
   - Summarize in one sentence: “In a choreography‑based saga, each service reacts to domain events, propagating state changes and compensations without a central orchestrator.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
