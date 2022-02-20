import { toCompletionItemForKeyword } from '../utils'

const CLAUSES: string[] = [
  'SELECT',
  'WHERE',
  'ORDER BY',
  'GROUP BY',
  'LIMIT',
  '--',
  '/*',
  '(',
]

export function createBasicKeywordCandidates() {
  return CLAUSES.map((v) => toCompletionItemForKeyword(v))
}
