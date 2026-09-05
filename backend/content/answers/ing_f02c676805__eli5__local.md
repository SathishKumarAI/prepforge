---
qid: ing_f02c676805__eli5__local
question: 'Explain: Two Pointers (5 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 304
total_tokens: 466
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:56-05:00'
sources: []
---

**Two‑Pointer Technique – “The Walking Pair”**

Imagine you’re at a long hallway with a line of people standing in order. You have two friends: one starts at the very front (left pointer) and the other at the very back (right pointer). Your job is to find pairs that satisfy a rule, like having a combined weight under 200 kg.  
You let the front friend walk forward while the back friend walks backward, always keeping track of their current positions. If their combined weight is too heavy, you pull the heavier one back (move the right pointer left). If it’s light enough, you record the pair and then move the front friend forward to try a new combination.  
This “walking pair” idea works for many problems:  
1. **Two Sum** – find two numbers that add to a target.  
2. **Palindrome Check** – compare characters from both ends.  
3. **Valid Parentheses** – match opening and closing brackets.  
4. **Merge Sorted Arrays** – combine two sorted lists into one.  
5. **Longest Substring Without Repeating Characters** – slide pointers while tracking seen letters.  

By moving the two pointers inward based on a simple rule, you solve each problem in linear time—just like a pair of friends efficiently scanning a hallway for the right match.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
