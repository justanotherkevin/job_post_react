class AddCompanyNameToJobPostsTable < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :company_name, :string
  end
end
