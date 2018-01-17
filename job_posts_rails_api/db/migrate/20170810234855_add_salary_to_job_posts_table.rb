class AddSalaryToJobPostsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :lower_salary, :string
    add_column :job_posts, :upper_salary, :string
  end
end
