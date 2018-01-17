require "faker"

JobPost.destory_all 

def make_skills
  skills = []
  rand(5..10).times do
    skills << Faker::Job.key_skill
  end
  skills.join(", ")
end

def lower_rand_salary
  rand(6..8) * 1000
end

def higher_rand_salary
  rand(9..20) * 1000
end

def sample_job_type
  job_kind = ["full-time","part-time","no-time"]
  job_kind.sample
end

20.times do
  JobPost.create(
    title:          Faker::Job.title,
    company_name:   Faker::Company.name,
    summary:        Faker::Lorem.paragraph(4, false, 5),
    date_created:   Faker::Date.between_except(15.days.ago, 0.days.ago, Date.today),
    location:       Faker::Address.state + ", " + Faker::Address.state_abbr,
    zip:            Faker::Address.zip_code,
    latitude:       Faker::Address.latitude,
    longitude:      Faker::Address.longitude,
    skills:         make_skills,
    salary:         higher_rand_salary,
    job_type:       sample_job_type
    )
end
