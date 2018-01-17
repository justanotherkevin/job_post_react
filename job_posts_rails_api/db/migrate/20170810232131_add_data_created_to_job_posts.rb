class AddDataCreatedToJobPosts < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :date_created, :string
  end
end
