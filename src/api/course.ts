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