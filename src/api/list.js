import service from '@/utils/request'

// 列表
export function getList(params) {
  return service.get('/list', { params })
}

// 详情
export function getDetail(params) {
  return service.get('/detail', { params })
}
