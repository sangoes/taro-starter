import { check, createAction } from "../utils";
import { DvaModel, ReduxAction, ReduxSagaEffects } from "../interface";
import { TemplateState } from "../interface/template";
import { SAVE } from "../actions";
import * as template from "../services/template";

const NAMESPACE = "template";

/**
 * 链接
 */
const model: DvaModel<TemplateState> = {
  namespace: NAMESPACE,
  state: {
    templateList: [],
    templatePage: []
  },
  effects: {
    // 添加授权表
    *add({ payload, callback }: ReduxAction, { call, put }: ReduxSagaEffects) {
      const response = yield call(template.add, payload);
      if (check(response)) {
        // 分页
        yield put(createAction(SAVE)({}));
        callback && callback();
      }
    }
  },
  reducers: {
    save(state: object, { payload }: ReduxAction) {
      return {
        ...state,
        ...payload
      };
    },
    error(state: object, { payload }: ReduxAction) {
      return {
        ...state,
        error: payload
      };
    }
  },
  subscriptions: {
    init({ dispatch }) {}
  }
};
export default model;
