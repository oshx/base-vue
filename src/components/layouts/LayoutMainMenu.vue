<template>
  <VNavigationDrawer
    app
    fixed
    clipped
    v-model="drawer"
  >
    <VList>
      <VListTile>
        <VListTileAction>
          <VIcon>home</VIcon>
        </VListTileAction>
        <VListTileTitle>Home</VListTileTitle>
      </VListTile>

      <VListGroup
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <VListTile>
            <VListTileTitle>Users</VListTileTitle>
          </VListTile>
        </template>
        <VListGroup
          no-action
          sub-group
          value="true"
        >
          <template v-slot:activator>
            <VListTile>
              <VListTileTitle>Admin</VListTileTitle>
            </VListTile>
          </template>

          <VListTile
            v-for="(admin, i) in admins"
            :key="i"
            @click=""
          >
            <VListTileTitle v-text="admin[0]"></VListTileTitle>
            <VListTileAction>
              <VIcon v-text="admin[1]"></VIcon>
            </VListTileAction>
          </VListTile>
        </VListGroup>

        <VListGroup
          sub-group
          no-action
        >
          <template v-slot:activator>
            <VListTile>
              <VListTileTitle>Actions</VListTileTitle>
            </VListTile>
          </template>
          <VListTile
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <VListTileTitle v-text="crud[0]"></VListTileTitle>
            <VListTileAction>
              <VIcon v-text="crud[1]"></VIcon>
            </VListTileAction>
          </VListTile>
        </VListGroup>
      </VListGroup>
    </VList>
  </VNavigationDrawer>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {eventBus} from "@/utils/eventBus";
  import LayoutEvent from "@/enums/LayoutEvent";

  @Component<LayoutMainMenu>({
    mounted(): void {
      this.bindToggleEventListener();
    },
  })
  class LayoutMainMenu extends Vue {
    protected admins = [
      ["Management", "people_outline"],
      ["Settings", "settings"],
    ];

    protected cruds = [
      ["Create", "add"],
      ["Read", "insert_drive_file"],
      ["Update", "update"],
      ["Delete", "delete"],
    ];

    protected drawer: boolean = true;

    private bindToggleEventListener(): void {
      eventBus.$on(LayoutEvent.TOGGLE_MAINMENU, this.handleToggleSelfDisplay);
    }

    private handleToggleSelfDisplay(): void {
      this.drawer = !this.drawer;
    }
  }

  export default LayoutMainMenu;
</script>
