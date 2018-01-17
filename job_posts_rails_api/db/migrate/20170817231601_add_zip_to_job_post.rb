class AddZipToJobPost < ActiveRecord::Migration[5.0]
  def change
    add_column :job_posts, :zip, :string
  end
end
