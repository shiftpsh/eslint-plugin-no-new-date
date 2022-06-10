"use strict";

import { ESLintUtils, TSESTree } from "@typescript-eslint/experimental-utils";

const rule = ESLintUtils.RuleCreator(
  () => "https://github.com/shiftpsh/eslint-plugin-no-new-date"
)({
  name: "no-new-date",
  meta: {
    type: "problem",
    docs: {
      description: "Disallow `new Date()`",
      category: "Possible Errors",
      recommended: "error",
    },
    messages: {
      noNewDate: "Creation of date with `new Date` is prohibited.",
    },
    schema: [],
  },
  defaultOptions: [],
  create: (context) => {
    return {
      'NewExpression[callee.name="Date"][arguments.length=0]'(
        node: TSESTree.NewExpression | TSESTree.CallExpression
      ) {
        context.report({
          node,
          messageId: "noNewDate",
        });
      },
    };
  },
});

export = rule;
