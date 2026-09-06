---
qid: ing_46edb19c4e__fp__local
question: 'Explain: Multi-Step Injection Defeats Single-Payload Defenses'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 377
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:36:31-05:00'
sources: []
---

### Why a single‑payload defense can fail against multi‑step injection

The **fundamental problem** is that a web application’s security surface is a *sequence* of checks, each guarding a particular boundary (input validation, type checking, permission, etc.).  
A single‑payload defense—e.g., a whitelist that blocks “; DROP TABLE” in one request—is built on the assumption that **one atomic input can be isolated**. In reality, an attacker can orchestrate a *chain* of benign-looking requests that together form a malicious payload.

1. **Model the chain as a directed acyclic graph (DAG)** where nodes are application states and edges are transitions triggered by inputs.  
2. Each edge carries a *cost* (probability of detection) and a *benefit* (advancement toward compromise).  
3. The attacker’s objective is to find a path from the initial node to a goal node with minimal cumulative cost—an optimization problem solved by dynamic programming or shortest‑path algorithms.

Because defenses typically evaluate edges independently, they fail to capture **dependencies**: an edge that looks safe in isolation may become dangerous once preceding edges have altered the system state (e.g., injected a no‑op payload that changes session variables).  
A non‑obvious insight: **defenses should be designed as global policies over the DAG**, not per‑edge filters. Only by modeling the *entire attack surface* can we anticipate multi‑step injection tactics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
