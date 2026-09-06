---
qid: ing_b54a633664__fp__local
question: 'Explain: User Preference Service — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 492
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:46-05:00'
sources: []
---

### From the Ground Up

**What the system must solve**  
A user‑centric notification engine is essentially a *real‑time recommendation* problem: given a stream of events \(E_t\) (content, offers, alerts), we must decide for each user \(u\) whether to surface event \(e\) at time \(t\). The objective is twofold:

1. **Maximize engagement** – deliver the most relevant items without overwhelming the user.  
2. **Minimize latency** – decisions must be made in milliseconds, as users expect instant feedback.

This translates into an online convex optimization problem: minimize a loss function that penalizes mis‑ranked notifications while respecting a *budget constraint* on the number of pushes per user.

---

### Architectural Skeleton

| Layer | Function |
|-------|----------|
| **Event Ingestion** | Kafka streams → feature extraction (user context, item metadata). |
| **Feature Store** | Low‑latency key‑value store (Redis) with pre‑computed embeddings. |
| **Ranking Engine** | Linear/gradient‑boosted model that scores \(\langle u,e\rangle\) on the fly; uses *differentiable* thresholding to satisfy per‑user quota. |
| **A/B Scheduler** | Multi‑armed bandit layer that allocates a small fraction of slots to exploratory notifications, updating policy via Thompson Sampling. |
| **Delivery Layer** | Push gateway (FCM/APNs) with back‑pressure handling; retries capped by exponential decay. |

---

### Deep Insight

Most designs treat the quota as a hard cap (“no more than N pushes per day”). The subtlety is to *learn* that cap itself: users vary in tolerance, and this tolerance changes over time (e.g., after a bad experience). By casting the quota as a **dynamic constraint**—a function \(q_u(t)\) learned from click‑through rates—we let the optimizer adjust the budget per user instead of imposing a static rule. This turns an otherwise greedy system into a *budget‑aware* recommender that self‑regulates, improving long‑term engagement and reducing churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
