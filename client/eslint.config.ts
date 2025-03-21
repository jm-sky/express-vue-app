import pluginVue from 'eslint-plugin-vue'
// @ts-expect-error No types
import importPlugin from 'eslint-plugin-import'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  importPlugin.flatConfigs.recommended,
  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommendedTypeChecked,

  // add your custom rules here
  {
    rules: {
      'semi': ['error', 'never'],
      'quotes': ['error', 'single', { avoidEscape: true }],

      'import/first': 'off',
      'import/named': 'off', // The core 'import/named' rules does not work with type definitions
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'ignore',
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        }
      ],
      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
        'allowSeparatedGroups': false
      }],
    }
  },
)
