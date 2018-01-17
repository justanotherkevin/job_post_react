class AddJobTypeToJobPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :job_type, :string
  end
end
