import { JobPrismaRepository } from './job-prisma-repository'

const makeSut = (): JobPrismaRepository => {
  return new JobPrismaRepository()
}

describe('loadAll()', () => {
  test('Should load all jobs on success', async () => {
    const sut = makeSut()
    const jobs = await sut.loadAll()
    expect(jobs.length).toBe(2)
  })
})
