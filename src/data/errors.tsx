const errors = [
  "This destination does not exist",
  "Have you actually thought about this before typing random things?",
  "-1 coin",
  "Maybe read the manpages?",
  "Use your brain!",
  "Why not ask a tutor for help?",
  <span>
    Here is a{" "}
    <a target="_newtab" href="https://youtu.be/dQw4w9WgXcQ">
      HINT
    </a>
  </span>,
];

function* createErrorGenerator() {
  yield errors[0];

  while (true) {
    yield errors[Math.floor(Math.random() * errors.length)];
  }
}

const errorGenerator = createErrorGenerator();

export const getRandomError = () =>
  errorGenerator.next().value as string | JSX.Element;
