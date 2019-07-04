import { request } from "../utils";
import { stringify } from "querystring";
import qs from "qs";

/**
 * @description 添加链接
 * @author jerrychir
 * @export
 * @param {*} params
 * @returns
 */
export async function add(params) {
  return request(`/api/tools/connection`, {
    method: "POST",
    body: params
  });
}

/**
 * @description 分页
 * @author jerrychir
 * @export
 * @param {*} params
 * @returns
 */
export async function page(params) {
  return request(`/api/tools/connection/page?${stringify(params)}`);
}

/**
 * @description 列表
 * @author jerrychir
 * @export
 * @param {*} params
 * @returns
 */
export async function list(params) {
  return request(`/api/tools/connection/list?${stringify(params)}`);
}
