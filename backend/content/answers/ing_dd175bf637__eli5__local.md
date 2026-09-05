---
qid: ing_dd175bf637__eli5__local
question: 'Explain: Approach #2: Choreography — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 389
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:13-05:00'
sources: []
---

**Imagine a city of books that you want to read, but you can’t walk through the whole library at once. Instead, you send a small robot—your “web crawler”—into each aisle.**

1. **The Robot’s Mission (Choreography):**  
   The robot has a simple rule: *“Whenever I find a new book, take a picture of its cover and drop it into the central shelf.”* It does not ask anyone else for instructions; it just follows this one rule.

2. **Central Shelf (Event Bus):**  
   All pictures land on the shelf in real time. Other robots or services—like a “summary” robot, a “recommendation” robot, or a database service—watch the shelf. When they see a new picture, they decide what to do: write the title to a list, generate a short summary, or store metadata.

3. **No Central Command:**  
   There’s no master scheduler telling each robot when to crawl or where to go. Each robot acts independently, reacting only to the events it sees. If one robot fails, the others keep working; the system is resilient because there’s no single point of failure.

4. **Scalability in Action:**  
   If you add more robots (more crawlers) or more “watchers” (summary services), they all just start listening to the same shelf. The city grows without needing a new traffic controller.

In this analogy, the *web crawler* is your data‑fetching agent, the *central shelf* is an event bus or message queue, and the *other robots* are microservices that react to crawled data. Choreography keeps each component simple, loosely coupled, and highly scalable—just like a well‑orchestrated city of book‑reading robots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
