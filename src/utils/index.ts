/**
 * 网络请求
 */
export { default as request } from "./request";

/**
 * 工具
 */
export { default as tools } from "./tools";

/**
 * model
 */
export { default as model } from "./model";

/**
 *  action
 * @param type
 * @param payload
 */
export const Action = (type: string, payload?: any) => ({ type, payload });

/**
 * 统一处理action
 * @param {*} type
 */
export const createAction = type => payload => ({ type, payload });
/**
 * 统一处理action
 * @param {*} type
 */
export const createActions = type => payload => callback => ({
  type,
  payload,
  callback
});

/**
 * 网络检查
 * @param {*} response
 */
export const check = response => response && response.code == 200;
