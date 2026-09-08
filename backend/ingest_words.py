"""The three token-level constants ingest.py and quiz_synth.py share.

A separate module so quiz_synth can use them without importing ingest, which
imports quiz_synth — the one place a cycle would otherwise form.
"""
import re

STOPWORDS = {
    "a", "an", "the", "and", "or", "but", "if", "then", "than", "that", "this", "these", "those",
    "for", "with", "without", "from", "into", "onto", "over", "under", "about", "across", "of",
    "to", "in", "on", "at", "by", "as", "is", "are", "was", "were", "be", "been", "being",
    "do", "does", "did", "done", "doing", "can", "could", "will", "would", "should", "shall",
    "may", "might", "must", "have", "has", "had", "you", "your", "yours", "they", "them", "their",
    "we", "our", "it", "its", "he", "she", "his", "her", "who", "whom", "whose",
    "what", "which", "when", "where", "why", "how", "here", "there", "some", "any", "all", "each",
    "both", "other", "others", "such", "only", "also", "more", "most", "much", "many", "very",
    "explain", "describe", "difference", "between", "using", "use", "used", "make", "makes",
    "need", "needs", "want", "get", "gets", "give", "given", "take", "like", "just", "one", "two",
    "notes", "note", "example", "examples", "way", "ways", "thing", "things", "good", "bad",
    "new", "old", "same", "different", "first", "second", "next", "last", "see", "know", "think",
    # difficulty labels: every DSA table repeats them, they say nothing about the subject
    "easy", "medium", "hard",
}

_LEAD_NUM = re.compile(r"^\d+[.)]\s+")
_QTOKEN = re.compile(r"[a-z0-9][a-z0-9+#.-]{1,}")
