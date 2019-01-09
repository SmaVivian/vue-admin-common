import service from '@/utils/request'

// 表格列表
export function getList(params) {
  return service.get('/table/list', { params })
}
