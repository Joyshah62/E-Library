# # -*- mode: ruby -*-
# # vi: set ft=ruby :

# # All Vagrant configuration is done below. The "2" in Vagrant.configure
# # configures the configuration version (we support older styles for
# # backwards compatibility). Please don't change it unless you know what
# # you're doing.
# Vagrant.configure("2") do |config|
#   # The most common configuration options are documented and commented below.
#   # For a complete reference, please see the online documentation at
#   # https://docs.vagrantup.com.

#   # Every Vagrant development environment requires a box. You can search for
#   # boxes at https://vagrantcloud.com/search.
#   config.vm.box = "base"

#   # Disable automatic box update checking. If you disable this, then
#   # boxes will only be checked for updates when the user runs
#   # `vagrant box outdated`. This is not recommended.
#   # config.vm.box_check_update = false

#   # Create a forwarded port mapping which allows access to a specific port
#   # within the machine from a port on the host machine. In the example below,
#   # accessing "localhost:8080" will access port 80 on the guest machine.
#   # NOTE: This will enable public access to the opened port
#   # config.vm.network "forwarded_port", guest: 80, host: 8080

#   # Create a forwarded port mapping which allows access to a specific port
#   # within the machine from a port on the host machine and only allow access
#   # via 127.0.0.1 to disable public access
#   # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

#   # Create a private network, which allows host-only access to the machine
#   # using a specific IP.
#   # config.vm.network "private_network", ip: "192.168.33.10"

#   # Create a public network, which generally matched to bridged network.
#   # Bridged networks make the machine appear as another physical device on
#   # your network.
#   # config.vm.network "public_network"

#   # Share an additional folder to the guest VM. The first argument is
#   # the path on the host to the actual folder. The second argument is
#   # the path on the guest to mount the folder. And the optional third
#   # argument is a set of non-required options.
#   # config.vm.synced_folder "../data", "/vagrant_data"

#   # Provider-specific configuration so you can fine-tune various
#   # backing providers for Vagrant. These expose provider-specific options.
#   # Example for VirtualBox:
#   #
#   # config.vm.provider "virtualbox" do |vb|
#   #   # Display the VirtualBox GUI when booting the machine
#   #   vb.gui = true
#   #
#   #   # Customize the amount of memory on the VM:
#   #   vb.memory = "1024"
#   # end
#   #
#   # View the documentation for the provider you are using for more
#   # information on available options.

#   # Enable provisioning with a shell script. Additional provisioners such as
#   # Ansible, Chef, Docker, Puppet and Salt are also available. Please see the
#   # documentation for more information about their specific syntax and use.
#   # config.vm.provision "shell", inline: <<-SHELL
#   #   apt-get update
#   #   apt-get install -y apache2
#   # SHELL
# end


# ------------------------------------------------------ #

# Vagrant.configure(2) do |config|
#   # Ubuntu 20.04 LTS (Focal Fossa)
#   config.vm.box = "ubuntu/focal64"

#   config.vm.provider "virtualbox" do |vb|
#     # Display the VirtualBox GUI when booting the machine
#     vb.gui = true
#   end

#   # Install xfce and virtualbox additions
#   config.vm.provision "shell", inline: "sudo apt-get update"
#   config.vm.provision "shell", inline: "sudo apt-get install -y xfce4 virtualbox-guest-dkms virtualbox-guest-utils virtualbox-guest-x11"
#   # Permit anyone to start the GUI
#   config.vm.provision "shell", inline: "sudo sed -i 's/allowed_users=.*$/allowed_users=anybody/' /etc/X11/Xwrapper.config"
# end


# To start the vm
# # vagrant up

# Login with username: vagrant, password: vagrant via the login prompt on the virtualbox GUI.

# Start xfce
# startx


# ------------------------------------------------------ #



Vagrant.configure("2") do |config|
  # Ubuntu 18.04 LTS (Bionic Beaver)
  config.vm.box = "ubuntu/bionic64"
  # Optional - enlarge disk (will also convert the format from VMDK to VDI):
  # config.disksize.size = "40GB"

  config.vm.provider "virtualbox" do |vb|
    # Display the VirtualBox GUI when booting the machine
    vb.gui = true
    vb.memory = 4096
    vb.cpus = 4
    vb.customize ['modifyvm', :id, '--clipboard', 'bidirectional']
  end

  # config.vm.provision "shell", inline: <<-SCRIPT
  #   echo "inline script"
  # SCRIPT


  config.vm.provision "shell", path: "VagrantScripts/install-desktop.sh"
  config.vm.provision "shell", path: "VagrantScripts/install-chrome.sh"
  config.vm.provision "shell", path: "VagrantScripts/install-ide.sh"
  config.vm.provision "shell", path: "VagrantScripts/install-java-eclipse.sh"

  config.vm.provision "shell", path: "VagrantScripts/install-docker.sh"
  config.vm.provision "shell", path: "VagrantScripts/install-node.sh"
  config.vm.provision "shell", path: "VagrantScripts/install-apache-php.sh"

  config.vm.provision "file", source: "VagrantScripts/etc_mongod.conf.no-auth", destination: "/tmp/mongod.conf.no-auth"
  config.vm.provision "file", source: "VagrantScripts/etc_mongod.conf.auth",    destination: "/tmp/mongod.conf.auth"
  config.vm.provision "shell", path: "VagrantScripts/install-mongodb.sh"

  config.vm.provision "shell", path: "VagrantScripts/install-mysql.sh"
  config.vm.provision "shell", path: "VagrantScripts/install-memcached.sh"

  config.vm.provision "shell", path: "VagrantScripts/install-awscli.sh"
end