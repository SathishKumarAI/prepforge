---
qid: ing_061ab8f54d__eli5__local
question: 'Explain: same server and then from then on — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 210
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:10-05:00'
sources: []
---

Imagine a giant pizza shop that wants to send the freshest slices to customers wherever they are.  
**Geo‑hashing** is like giving every slice a unique address made of letters and numbers (the “hash”). That address tells the server, “This slice belongs in this neighborhood.” Instead of searching all tables for the right one, the server looks up the hash and instantly finds the exact spot.

When a customer orders, the pizza truck (the **WebSocket**) keeps a steady two‑way phone line open with the shop. The truck can instantly receive updates—new toppings, traffic delays, or a change in delivery time—and send back live location data so the customer sees the truck moving on their map in real time.

So, geo‑hashing quickly locates where to deliver, and WebSockets keep the order and driver connected all the way through.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
