class RemoveAndRenameColumnSalaryfromJobPosts < ActiveRecord::Migration[5.0]
  def change
      remove_column :job_posts, :lower_salary
      rename_column :job_posts, :upper_salary, :salary
  end
end
