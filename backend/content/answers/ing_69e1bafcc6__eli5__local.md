---
qid: ing_69e1bafcc6__eli5__local
question: 'Explain: Layered Architecture — 6 Software Architectural Patterns You Must
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 397
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:43-05:00'
sources: []
---

Imagine you’re planning a grand banquet hall. The **layered architecture** is the floor plan that keeps everything organized: each level has a clear purpose and only talks to the level right below it.

1. **Model‑View‑Controller (MVC)** – Think of the *model* as the menu (data), the *view* as the table setting (display), and the *controller* as the maître d’ who takes orders and sends them to the kitchen.  
2. **Model‑View‑Presenter (MVP)** – The presenter is a waiter who translates guest requests into kitchen actions, then updates the view.  
3. **Model‑View‑ViewModel (MVVM)** – Here the *viewmodel* is like a smart recipe book that automatically adjusts ingredients as guests change preferences.  
4. **Clean Architecture** – Picture a central core of pure ideas surrounded by concentric rings of adapters; nothing from outside can touch the core directly.  
5. **Onion Architecture** – Similar to Clean, but each ring is literally an onion layer: inner layers depend on outer ones, not vice versa.  
6. **Hexagonal (Ports & Adapters)** – The center is a chef’s station; ports are the kitchen windows that let ingredients (data) in or out through adapters (sockets).

Each pattern keeps responsibilities tidy, just as each banquet hall floor keeps guests, staff, and supplies separated but still working together smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
