---
qid: ing_9a05b3d519__eli5__local
question: 'Explain: But the idea is this number(10 KMs) — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 345
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:01-05:00'
sources: []
---

In a Google‑Maps style interview, the “10 KMs” is just a concrete limit you give the system to keep the problem bounded and test your design skills. Think of it like a neighborhood radius: if someone asks *“Show me all coffee shops within 10 km of my location,”* the system must quickly find, rank, and return those places.

**Concrete analogy:** Imagine you’re at a party with a giant poster board. You want to hand out flyers only to people who are standing within ten feet of you. Your job is to build a “distance filter” that can look up everyone in that 10‑foot circle and give them the flyer, even if there are thousands of guests scattered around the room.

**Key terms explained simply**

- **Geohash / spatial index:** A way to turn a latitude/longitude pair into a short code so you can group nearby points together.  
- **Bounding box:** Roughly the square that covers the circle; it’s easier for computers to check if a point is inside before doing a precise distance calculation.  
- **Distance metric (Haversine formula):** The math used to compute how far two coordinates are on Earth’s surface.

By setting the 10 km limit, you’re asking the candidate to show how they would store location data, quickly find points that fall into that radius, and return them efficiently—just like handing out flyers only to those within ten feet of a party host.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
