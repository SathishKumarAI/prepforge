---
qid: ing_30c19b7b45__eli5__local
question: How to get nearby businesses with quadtree?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 252
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:10-05:00'
sources: []
---

Think of a city map as a giant chessboard. A **quadtree** is like a set of nested boxes that keep splitting the board into four smaller squares whenever something interesting—like a business—falls inside one of them.  
When you want to find all businesses near your current spot, you first ask the quadtree for the box that contains you. Because every box knows which smaller boxes lie next to it, you can quickly look at only those adjacent boxes instead of scanning the whole board. This way you only check a handful of tiny squares that are truly “nearby,” just as a chess player would look only at the squares around their piece, not every square on the board.

**Key terms**  
- **Quadtree**: A tree data structure where each node splits its area into four equal parts.  
- **Nearby businesses**: Any business whose coordinates lie within a chosen distance from your current location.  

The quadtree lets you zoom in to the relevant part of the map, so finding nearby businesses becomes fast and efficient—like looking only at the squares that matter on a chessboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
