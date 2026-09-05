---
qid: ing_35d282655a__think__local
question: 'Explain: Basic Requirements — Foodorderingzomatoswiggy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 415
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:32:53-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Identify what “Basic Requirements” means (functional, non‑functional, technical).  
   - Assume a typical e‑commerce food‑ordering app (Zomato/Swiggy style) with users, restaurants, orders, payments, and delivery tracking.  

**2. Adopt a mental model / framework**  
   - Use the **Three‑Layer Architecture**: Presentation (UI), Business Logic (API/ML services), Data Layer (databases, caches).  
   - Overlay a **Feature‑Driven Requirements** list: user registration, restaurant catalog, menu browsing, cart & checkout, payment gateway, order status, reviews, personalization.  

**3. Step‑by‑step reasoning**  
   1. List core *user stories* → map to features.  
   2. For each feature, decide required data (e.g., menu items → inventory tables).  
   3. Identify ML touchpoints: recommendation engine, demand forecasting, dynamic pricing.  
   4. Define non‑functional needs: scalability (load balancing), security (PCI DSS), latency (<2 s).  

**4. Common traps to avoid**  
   - *Over‑engineering*: adding ML components before proving business value.  
   - *Ignoring edge cases*: no‑delivery zones, out‑of‑stock items.  
   - *Assuming data availability*: need explicit data pipelines for training models.  

**5. Sanity‑check & verbalize**  
   - Cross‑check each requirement against the user stories: does it serve a real user need?  
   - Run a quick “red‑team” test: imagine an order failure—does the system handle it gracefully?  
   - Summarize in plain language to stakeholders, then refine technical details.  

Follow this sequence whenever you’re asked to lay out basic requirements for any ML‑enhanced product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
