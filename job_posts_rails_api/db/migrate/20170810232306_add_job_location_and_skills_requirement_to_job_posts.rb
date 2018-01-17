class AddJobLocationAndSkillsRequirementToJobPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :location, :string
    add_column :job_posts, :skills, :string
  end
end
