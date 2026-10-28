import assert from 'node:assert/strict';
import {retrieve,splitText} from '../lib/retrieval.ts';
const chunks=[...splitText('제5조 출장비 지급. 출장자는 교통비 영수증과 출장보고서를 제출하여야 한다.','여비규정.txt',0),...splitText('제7조 연가 신청. 직원은 연가 사용 3일 전에 부서장에게 신청하여야 한다.','복무규정.txt',0)];
assert.equal(retrieve('출장비 제출 서류',chunks)[0].name,'여비규정.txt');
assert.equal(retrieve('연가 신청 절차',chunks)[0].name,'복무규정.txt');
assert.equal(retrieve('quantumxyz',chunks).length,0);
assert.equal(retrieve('',chunks).length,0);
assert.ok(splitText('가'.repeat(2500),'test',3).every(c=>c.page===3&&c.text.length<=1100));
console.log('Retrieval tests passed: Korean search, no-match, empty query, chunk bounds.');
