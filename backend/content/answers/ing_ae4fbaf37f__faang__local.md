---
qid: ing_ae4fbaf37f__faang__local
question: 'Explain: move play it on the board and — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 473
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:52-05:00'
sources: []
---

**Clarify**  
You’re building a chess engine that can **apply a move to a board state** and update all relevant data (piece positions, castling rights, en‑passant target, half‑move counter). Assume we have a `Board` object with an 8×8 array of pieces, bitboards for each side, and meta flags.  

**Approach**  
1. Parse the move notation (SAN or UCI).  
2. Validate legality: check piece movement rules, pins, checks, promotion, castling conditions.  
3. Update the board array & bitboards atomically.  
4. Adjust castling rights if a king/rook moves or is captured.  
5. Set en‑passant target when a pawn double‑step occurs.  
6. Increment half‑move counter unless a capture or pawn move happened; reset on fifty‑move rule checks.  

**Depth**  
Use *bitboard algebra* for speed: each piece type has its own 64‑bit mask. Move generation and execution become bitwise XORs/ANDs. For castling, precompute king/rook squares and check that intervening squares are empty and not under attack. Promotion is handled by replacing the pawn’s bit with the chosen piece type. After applying a move, recompute attacked squares to detect checks.  

**Edge Cases**  
- Illegal moves (e.g., moving into check).  
- En‑passant capture when opponent moved two squares.  
- Castling when king or rook has moved or is in check.  
- Promotion to any piece type.  
Test with a suite of known puzzles and endgames.  

**Optimize & Communicate**  
Profile the move‑apply function; use caching for attack tables, avoid dynamic memory allocation per move. Explain trade‑offs: bitboards give O(1) updates but require careful handling of promotions and castling flags. Keep the public API simple—`Board.apply(move)` returns a new board or raises an exception on illegal moves. This clarity aligns with FAANG expectations for clean, maintainable code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
