/**
 * @fileoverview Disallow new Date().
 * @author shiftpsh
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Disallow new Date().",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      noNewDate: "new Date() is prohibited.",
    },
  },

  create(context) {
    return {
      // visitor functions for different types of nodes
      'NewExpression[callee.name="Date"][arguments.length=0]'(node) {
        context.report({
          node,
          messageId: "noNewDate",
        });
      },
    };
  },
};
