/**
 * Guards the two rules that make a card you wrote safe to put in the same deck
 * as the bank's 18,284.
 *
 * `progress.srs` is keyed by question id and nothing else. An id that could
 * collide with the bank's would not produce a duplicate card — it would hand
 * your schedule for one question to a different question, silently, forever.
 * And a highlight arrives carrying the layout it was rendered in; unclean, it
 * becomes a card with hard breaks wherever the window happened to be.
 *
 *   node scripts/test-usercards.mjs        # or: npm test
 */
import assert from "node:assert/strict";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const lib = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "userCards.ts");
const {
  makeUserCard,
  removeUserCard,
  toQuestion,
  isUserCardId,
  cleanHighlight,
  isUsableHighlight,
  MIN_HIGHLIGHT,
  MAX_HIGHLIGHT,
  MAX_QUESTION,
  USER_CARD_TOPIC,
} = await import(pathToFileURL(lib).href);

const NOW = "2026-09-02T18:30:00.000Z";

const tests = {
  test_an_id_can_never_be_mistaken_for_a_bank_id() {
    const card = makeUserCard([], { question: "Q?", answer: "A long enough answer." }, NOW);
    assert.ok(isUserCardId(card.id), card.id);
    for (const bank of ["q001", "q18284", "kafka-consumer-groups", "u", "user-guide"]) {
      assert.equal(isUserCardId(bank), false, `${bank} must not read as a card you wrote`);
    }
  },

  test_two_cards_made_in_the_same_second_still_differ() {
    const first = makeUserCard([], { question: "a", answer: "answer one here" }, NOW);
    const second = makeUserCard([first], { question: "b", answer: "answer two here" }, NOW);
    assert.notEqual(first.id, second.id);
  },

  test_a_highlight_loses_the_layout_it_was_rendered_in() {
    const raw = "  Gradient clipping bounds\n   the update,\n\nnot the gradient.  ";
    assert.equal(cleanHighlight(raw), "Gradient clipping bounds the update, not the gradient.");
  },

  test_a_phrase_is_not_an_answer_and_a_page_is_not_either() {
    assert.equal(isUsableHighlight("too short"), false);
    assert.equal(isUsableHighlight("   \n  "), false);
    assert.equal(isUsableHighlight("x".repeat(MIN_HIGHLIGHT)), true);
    const long = makeUserCard([], { question: "q", answer: "y".repeat(MAX_HIGHLIGHT + 500) }, NOW);
    assert.equal(long.answer.length, MAX_HIGHLIGHT);
  },

  test_the_question_is_trimmed_and_capped() {
    const card = makeUserCard(
      [],
      { question: "  " + "why ".repeat(200), answer: "a real answer here" },
      NOW,
    );
    assert.equal(card.question.length, MAX_QUESTION);
    assert.equal(card.question.startsWith("why"), true, "leading space must go");
  },

  test_a_card_renders_as_an_ordinary_question() {
    const card = makeUserCard(
      [],
      { question: "Why clip?", answer: "It bounds the update.", source: { title: "Deep Learning", href: "https://example.com/x" } },
      NOW,
    );
    const q = toQuestion(card);
    assert.equal(q.id, card.id);
    assert.equal(q.topic, USER_CARD_TOPIC);
    assert.equal(q.answer, "It bounds the update.");
    assert.equal(q.difficulty, "medium");
    assert.deepEqual(q.tags, []);
    assert.equal(q.reading[0].url, "https://example.com/x");
    // No quiz payload: the study registry decides eligibility off exactly this.
    assert.equal(q.quiz, undefined);
  },

  test_a_card_with_no_source_still_renders() {
    const q = toQuestion(makeUserCard([], { question: "Q?", answer: "An answer of length." }, NOW));
    assert.equal(q.reading, undefined);
    assert.equal(q.origin.label, "Your highlight");
  },

  test_removing_one_card_leaves_the_rest_alone() {
    const a = makeUserCard([], { question: "a", answer: "answer one here" }, NOW);
    const b = makeUserCard([a], { question: "b", answer: "answer two here" }, NOW);
    assert.deepEqual(removeUserCard([a, b], a.id), [b]);
    assert.deepEqual(removeUserCard([a, b], "u-nope"), [a, b]);
  },
};

let passed = 0;
for (const [name, fn] of Object.entries(tests)) {
  try {
    fn();
    console.log(`ok   ${name}`);
    passed++;
  } catch (err) {
    console.log(`FAIL ${name}: ${err.message}`);
  }
}
const total = Object.keys(tests).length;
console.log(`\n${passed}/${total} pass`);
process.exit(passed === total ? 0 : 1);
