import client from './client';

export function getCourses() {
  return client.get('/courses');
}

export interface CreateCourseRequest {
  name: string;
  code: string;
}

export function createCourse(data: CreateCourseRequest) {
  return client.post('/courses', data);
}

export function deleteCourse(id: number) {
  return client.delete(`/courses/${id}`);
}

export interface JoinCourseRequest {
  code: string;
}

export function joinCourse(data: JoinCourseRequest) {
  return client.post(`/courses/join`, data);
}

export function leaveCourse(id: number) {
  return client.delete(`/courses/${id}/leave`);
}

export function getEnrolledCourses() {
  return client.get(`/courses/enrolled`);
}

export function getCourseDeleteInfo(id: number) {
  return client.get(`/courses/${id}/delete-info`);
}