import scrollModel from '../models/common/scrollModel';

/**
 * 네비게이션 숨김 여부 반환
 */

export default {
  isRemove: function() {
    const {
      isAction,
      whenAction
    } = new scrollModel();

    if (isAction) {
      let current = window.scrollY;
      console.log('current > whenAction => ' + current, current > whenAction);
      return current > whenAction
    }
    return false;
  },
};